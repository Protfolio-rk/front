resource "aws_cloudwatch_log_group" "client_logs" {
  name              = "/ecs/${var.project_name}-client"
  retention_in_days = 7

  tags = {
    Name = "${var.project_name}-client-logs"
  }
}