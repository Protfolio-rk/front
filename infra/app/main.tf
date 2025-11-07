resource "aws_ecs_service" "client" {
  name            = "${var.project_name}-client-service"
  cluster         = var.ecs_cluster_id
  task_definition = aws_ecs_task_definition.client.arn
  desired_count   = var.desired_count
  launch_type     = "FARGATE"

  network_configuration {
    subnets          = var.subnet_ids
    assign_public_ip = false
    security_groups  = concat(var.security_group_ids, [aws_security_group.client_sg.id])
  }

  load_balancer {
    target_group_arn = aws_lb_target_group.client.arn
    container_name   = "client"
    container_port   = var.container_port
  }
}

resource "aws_ecs_task_definition" "client" {
  family                   = "${var.project_name}-client"
  network_mode             = "awsvpc"
  requires_compatibilities = ["FARGATE"]
  cpu                      = var.cms_cpu
  memory                   = var.cms_memory
  execution_role_arn       = var.ecs_role_arn
  task_role_arn            = var.ecs_role_arn

  container_definitions = jsonencode([
    {
      name  = "client"
      image = "${var.container_image_url}:${var.image_tag}"

      portMappings = [
        {
          containerPort = var.container_port
          protocol      = "tcp"
        }
      ]

      environment = [
        {
          name  = "PORT"
          value = tostring(var.container_port)
        },
        {
          name  = "GRAPHQL_HOST"
          value = "http://${var.cms_domain_name}/api/graphql"
        },
        {
          name  = "STATIC_PATH"
          value = "https://${var.cdn_domain_name}"
        }
      ]

      logConfiguration = {
        logDriver = "awslogs"
        options = {
          "awslogs-group"         = aws_cloudwatch_log_group.client_logs.name
          "awslogs-region"        = var.region
          "awslogs-stream-prefix" = "ecs"
        }
      }
    }
  ])

  tags = {
    Name = "${var.project_name}-client"
  }
}

resource "aws_security_group" "client_sg" {
  name        = "${var.project_name}-client-sg"
  description = "Security group for the client ECS service"
  vpc_id      = var.vpc_id

  ingress {
    from_port   = var.container_port
    to_port     = var.container_port
    protocol    = "tcp"
    cidr_blocks = var.vpc_cidr_block
  }

  tags = {
    Name = "${var.project_name}-client-sg"
  }
}
