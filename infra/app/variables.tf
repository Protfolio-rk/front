variable "project_name" {
  type = string
}

variable "region" {
  type = string
}

# Networking
variable "vpc_id" {
  type = string
}

variable "subnet_ids" {
  type = list(string)
}

variable "security_group_ids" {
  type = list(string)
  description = "Should grant egress access to s3, documentdb, and cloudwatch"
}

variable "vpc_cidr_block" {
  type = list(string)
}

# Cluster
variable "ecs_cluster_id" {
  type = string
}

variable "ecs_role_arn" {
  type = string
}

variable "alb_arn" {
  type = string
}

# Container Specs
variable "container_image_url" {
  type = string
}

variable "container_port" {
  type = number
  default = 4321
}

# Environment Settings
variable "cms_domain_name" {
  type = string
}

variable "cdn_domain_name" {
  type = string
}

# Defaults - Compute Scaling
variable "desired_count" {
  type    = number
  default = 1
}

variable "cms_cpu" {
  type    = string
  default = "512"
}

variable "cms_memory" {
  type    = string
  default = "1024"
}