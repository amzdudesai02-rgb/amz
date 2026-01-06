# CI/CD Pipeline Documentation

This project uses GitHub Actions for Continuous Integration and Continuous Deployment.

## Workflows Overview

### 1. Frontend CI/CD (`frontend-ci.yml`)
- **Triggers**: Changes to `frontend/` folder
- **Actions**:
  - Builds and tests Next.js application
  - Runs on Node.js 18.x and 20.x
  - Runs ESLint
  - Builds the application
  - Comments on PRs with build status

### 2. Backend CI/CD (`backend-ci.yml`)
- **Triggers**: Changes to `backend/` folder
- **Actions**:
  - Tests Python FastAPI application
  - Runs on Python 3.11 and 3.12
  - Lints code with flake8
  - Tests API endpoints
  - Validates JSON responses

### 3. Full CI/CD Pipeline (`full-ci.yml`)
- **Triggers**: All pushes and PRs
- **Actions**:
  - Runs both frontend and backend tests
  - Provides overall status notification

### 4. Code Quality Checks (`code-quality.yml`)
- **Triggers**: All pushes and PRs
- **Actions**:
  - Frontend: ESLint and TypeScript checks
  - Backend: Black, isort, and flake8 checks

### 5. Deploy to Vercel (`deploy-vercel.yml`)
- **Triggers**: Pushes to `main` branch
- **Actions**:
  - Builds frontend
  - Deploys to Vercel production
  - Requires Vercel secrets (see setup below)

## Setup Instructions

### 1. Enable GitHub Actions
GitHub Actions are automatically enabled when you push the workflow files.

### 2. Configure Vercel Deployment (Optional)

To enable automatic Vercel deployment:

1. **Get Vercel Credentials:**
   - Go to [Vercel Dashboard](https://vercel.com/dashboard)
   - Navigate to Settings → Tokens
   - Create a new token (name it "GitHub Actions")

2. **Get Project IDs:**
   - In Vercel Dashboard, go to your project
   - Go to Settings → General
   - Copy `Project ID` and `Organization ID`

3. **Add GitHub Secrets:**
   - Go to your GitHub repository
   - Navigate to Settings → Secrets and variables → Actions
   - Add the following secrets:
     - `VERCEL_TOKEN` - Your Vercel token
     - `VERCEL_ORG_ID` - Your organization ID
     - `VERCEL_PROJECT_ID` - Your project ID

### 3. Verify Workflows

After pushing, check:
- Go to your GitHub repository
- Click on "Actions" tab
- You should see workflows running

## Workflow Status Badges

Add these badges to your README.md:

```markdown
![Frontend CI](https://github.com/amzdudesai02-rgb/amz/workflows/Frontend%20CI%2FCD/badge.svg)
![Backend CI](https://github.com/amzdudesai02-rgb/amz/workflows/Backend%20CI%2FCD/badge.svg)
![Full CI](https://github.com/amzdudesai02-rgb/amz/workflows/Full%20CI%2FCD%20Pipeline/badge.svg)
```

## Manual Workflow Triggers

You can manually trigger workflows:
1. Go to Actions tab
2. Select a workflow
3. Click "Run workflow"
4. Choose branch and click "Run workflow"

## Troubleshooting

### Workflows Not Running
- Check if workflows are enabled in repository settings
- Verify file paths in workflow triggers match your structure
- Check GitHub Actions usage limits

### Build Failures
- Check workflow logs in Actions tab
- Verify Node.js/Python versions match
- Ensure all dependencies are in package.json/requirements.txt

### Vercel Deployment Fails
- Verify all secrets are set correctly
- Check Vercel project settings
- Review Vercel deployment logs

## Customization

### Modify Workflow Triggers
Edit the `on:` section in workflow files:
```yaml
on:
  push:
    branches: [ main, develop ]
    paths:
      - 'frontend/**'
```

### Add More Tests
Add test steps in workflow files:
```yaml
- name: Run tests
  run: npm test
```

### Change Node.js/Python Versions
Update the version matrix:
```yaml
strategy:
  matrix:
    node-version: [18.x, 20.x]
```

## Best Practices

1. **Keep workflows fast**: Only run necessary checks
2. **Use caching**: Cache dependencies to speed up builds
3. **Fail fast**: Stop on first error when possible
4. **Review PRs**: Always review workflow results before merging
5. **Monitor costs**: Keep an eye on GitHub Actions usage

## Support

For issues with CI/CD:
1. Check workflow logs
2. Review GitHub Actions documentation
3. Check project-specific documentation

