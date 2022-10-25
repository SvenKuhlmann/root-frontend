#/bin/bash
helm repo update
helm install root dataenv/root --version 0.0.1-SNAPSHOT --values values.yaml