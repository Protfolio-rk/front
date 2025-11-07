module "client" {
  source = "./app"

  project_name = var.project_name
  region       = var.aws_region

  cdn_domain_name = var.cdn_domain_name
  cms_domain_name = var.cms_domain_name

  vpc_id              = var.vpc_id
  vpc_cidr_block      = [var.vpc_cidr_block]
  subnet_ids          = var.subnet_ids
  security_group_ids  = var.security_group_ids
  container_image_url = var.front_repository_url
  image_tag           = var.image_tag

  ecs_cluster_id = var.ecs_cluster_id
  ecs_role_arn   = var.ecs_role_arn
  alb_arn        = var.ecs_lb_arn
}

module "gateway" {
  source = "./gateway"

  project_name       = var.project_name
  apigw_listener_arn = module.client.client_lb_listener_arn
  apigw_vpc_link_id  = var.api_gateway_vpclink_id
}
