# Cloud Portfolio - Local Dev + Docker + kind
This archive contains a minimal React portfolio, a multi-stage Dockerfile, simple Kubernetes manifests for local `kind` clusters, and a GitHub Actions workflow to build & push the image.

## Quick guide
1. Build the Docker image:
   ```bash
   docker build -t youruser/cloud-portfolio:local .
   ```
2. Run locally:
   ```bash
   docker run --rm -p 8080:80 youruser/cloud-portfolio:local
   # open http://localhost:8080
   ```
3. (Optional) Create kind cluster and load image:
   ```bash
   kind create cluster --name portfolio-cluster
   kind load docker-image youruser/cloud-portfolio:local --name portfolio-cluster
   kubectl apply -f k8s/
   ```
