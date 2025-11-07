terraform {
  required_version = ">= 1.5.0"

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 6.0"
    }
  }

  backend "s3" {
    bucket         = "portfolio-rk-persist-tfinfra"
    key            = "portfolio/terraform.tfstate"
    dynamodb_table = "portfolio-rk-tf-locks"
    encrypt        = false
  }
}

provider "aws" {
  region = var.aws_region
}
