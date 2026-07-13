Use the following Bash script to create the entire directory structure in one go.

```bash
#!/bin/bash

mkdir -p devopshub/{\
Linux,\
App-Server-Web-Server,\
Bash-Scripting,\
Git-GitHub,\
AWS/{Cloud-Introduction,Amazon-EC2,VPC,VPC-Peering,IAM,S3,Route53-CDN,CloudWatch-CloudTrail,Auto-Scaling-Groups,Load-Balancers,RDS,Lambda,API-Gateway,KMS,SQS,Amazon-MQ,Secrets-Manager,WAF,Systems-Manager/Parameter-Store,AWS-Architecture},\
Jenkins,\
Docker,\
ECS,\
Terraform,\
Kubernetes,\
ArgoCD,\
Jenkins-Pipeline,\
Prometheus-Grafana,\
Ansible\
}

# Create .gitkeep in every directory
find devopshub -type d -exec touch {}/.gitkeep \;

echo "Directory structure created successfully."
```

### Usage

```bash
chmod +x create-directories.sh
./create-directories.sh
```

This will create:

```text
devopshub/
├── Linux/
├── App-Server-Web-Server/
├── Bash-Scripting/
├── Git-GitHub/
├── AWS/
│   ├── Cloud-Introduction/
│   ├── Amazon-EC2/
│   ├── VPC/
│   ├── VPC-Peering/
│   ├── IAM/
│   ├── S3/
│   ├── Route53-CDN/
│   ├── CloudWatch-CloudTrail/
│   ├── Auto-Scaling-Groups/
│   ├── Load-Balancers/
│   ├── RDS/
│   ├── Lambda/
│   ├── API-Gateway/
│   ├── KMS/
│   ├── SQS/
│   ├── Amazon-MQ/
│   ├── Secrets-Manager/
│   ├── WAF/
│   ├── Systems-Manager/
│   │   └── Parameter-Store/
│   └── AWS-Architecture/
├── Jenkins/
├── Docker/
├── ECS/
├── Terraform/
├── Kubernetes/
├── ArgoCD/
├── Jenkins-Pipeline/
├── Prometheus-Grafana/
└── Ansible/
```

This uses a single `mkdir -p` command with brace expansion, making it concise and easy to maintain.