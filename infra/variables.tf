variable "aws_region" {
  type        = string
  default     = "us-east-1"
  description = "The AWS region to deploy resources in."
}

variable "project_name" {
  type        = string
  description = "The name of the project."
}

# External Services
variable "cdn_domain_name" {
  type        = string
  description = "CloudFront domain name for the CDN."
}

variable "cms_domain_name" {
  type        = string
  description = "Domain name for the CMS GraphQL API."
}

# Networking
variable "vpc_id" {
  type        = string
  description = "The ID of the VPC where resources will be deployed."
}

variable "vpc_cidr_block" {
  type        = string
  description = "The CIDR block for the VPC."
}

variable "subnet_ids" {
  type        = list(string)
  description = "The IDs of the subnets where resources will be deployed."
}

variable "security_group_ids" {
  type        = list(string)
  description = "The IDs of the security groups to associate with the resources."
}

variable "api_gateway_vpclink_id" {
  type        = string
  description = "The VPC link ID for the API Gateway."
}

# ECS Cluster
variable "ecs_cluster_id" {
  type        = string
  description = "The ID of the ECS cluster."
}

variable "ecs_role_arn" {
  type        = string
  description = "The ECS role ARN with Task Execution permissions."
}

variable "ecs_lb_arn" {
  type        = string
  description = "ARN of load balancer"
}

# ECR
variable "front_repository_url" {
  type        = string
  description = "The URL of the front-end ECR repository."
}

variable "image_tag" {
  type        = string
  description = "The tag of the container image."
}