resource "aws_lb_target_group" "client" {
  name        = "${var.project_name}-client-tg"
  port        = var.container_port
  protocol    = "HTTP"
  vpc_id      = var.vpc_id
  target_type = "ip"

  tags = {
    Name = "${var.project_name}-client-tg"
  }
}

resource "aws_lb_listener" "client" {
  load_balancer_arn = var.alb_arn
  port              = 81
  protocol          = "HTTP"

  default_action {
    type             = "forward"
    target_group_arn = aws_lb_target_group.client.arn
  }
}
