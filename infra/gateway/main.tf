resource "aws_apigatewayv2_api" "client_api" {
  name          = "${var.project_name}-client-api"
  protocol_type = "HTTP"

  disable_execute_api_endpoint = false

  tags = {
    Name = "${var.project_name}-client-api"
  }
}

resource "aws_apigatewayv2_integration" "client_integration" {
  api_id             = aws_apigatewayv2_api.client_api.id
  integration_type   = "HTTP_PROXY"
  integration_method = "ANY"
  integration_uri    = var.apigw_listener_arn
  connection_type    = "VPC_LINK"
  connection_id      = var.apigw_vpc_link_id
}

resource "aws_apigatewayv2_route" "client_route" {
  api_id    = aws_apigatewayv2_api.client_api.id
  route_key = "ANY /{proxy+}"
  target    = "integrations/${aws_apigatewayv2_integration.client_integration.id}"
}

resource "aws_apigatewayv2_stage" "client_stage" {
  api_id      = aws_apigatewayv2_api.client_api.id
  name        = "$default"
  auto_deploy = true

  tags = {
    Name = "${var.project_name}-client-stage" 
  }
}