# CI/CD Setup Guide

This project uses GitHub Actions for Continuous Integration and Continuous Deployment.

## Workflows Overview

### 1. Frontend CI/CD (`frontend-ci.yml`)
- **Triggers**: Push/PR to `main` or `develop` branches affecting `frontend/`
- **Actions**:
  - Tests on Node.js 18.x and 20.x
  - Installs dependencies
  - Runs linter
  - Builds the application
  - Uploads build artifacts
  - Comments on PRs with build status

### 2. Backend CI/CD (`backend-ci.yml`)
- **Triggers**: Push/PR to `main` or `develop` branches affecting `backend/`
- **Actions**:
  - Tests on Python 3.11 and 3.12
  - Installs dependencies
  - Runs linting (flake8)
  - Tests API endpoints
  - Validates API documentation
  - Comments on PRs with test results

### 3. Deploy to Vercel (`deploy.yml`)
- **Triggers**: Push to `main` branch or manual dispatch
- **Actions**:
  - Builds frontend
  - Deploys to Vercel
  - Sends deployment status notifications

### 4. Code Quality Checks (`code-quality.yml`)
- **Triggers**: Push/PR to `main` or `develop`
- **Actions**:
  - Runs ESLint for frontend
  - Type checks TypeScript
  - Validates Python syntax
  - Checks dependency integrity

### 5. Dependency Updates (`dependency-update.yml`)
- **Triggers**: Weekly (Monday) or manual dispatch
- **Actions**:
  - Checks for outdated npm packages
  - Runs npm audit
  - Checks for outdated Python packages
  - Runs safety checks

## Setup Instructions

### 1. Vercel Deployment Setup

To enable automatic deployment to Vercel, add these secrets to your GitHub repository:

1. Go to **Settings** → **Secrets and variables** → **Actions**
2. Add the following secrets:

   - `VERCEL_TOKEN`: Your Vercel token
     - Get it from: https://vercel.com/account/tokens
   
   - `VERCEL_ORG_ID`: Your Vercel organization ID
     - Get it from: Vercel Dashboard → Settings → General
   
   - `VERCEL_PROJECT_ID`: Your Vercel project ID
     - Get it from: Vercel Dashboard → Project Settings → General

### 2. Enable GitHub Actions

GitHub Actions are automatically enabled when you push workflows to `.github/workflows/`.

### 3. Test the Workflows

1. **Test Frontend CI:**
   ```bash
   git checkout -b test/frontend-ci
   # Make a small change in frontend/
   git commit -m "Test frontend CI"
   git push origin test/frontend-ci
   # Create a PR to see the workflow run
   ```

2. **Test Backend CI:**
   ```bash
   git checkout -b test/backend-ci
   # Make a small change in backend/
   git commit -m "Test backend CI"
   git push origin test/backend-ci
   # Create a PR to see the workflow run
   ```

## Workflow Status Badges

Add these badges to your README.md:

```markdown
![Frontend CI](https://github.com/amzdudesai02-rgb/amz/workflows/Frontend%20CI%2FCD/badge.svg)
![Backend CI](https://github.com/amzdudesai02-rgb/amz/workflows/Backend%20CI%2FCD/badge.svg)
![Deploy](https://github.com/amzdudesai02-rgb/amz/workflows/Deploy%20to%20Vercel/badge.svg)
```

## Manual Workflow Triggers

You can manually trigger workflows:

1. Go to **Actions** tab in GitHub
2. Select the workflow you want to run
3. Click **Run workflow**
4. Select branch and click **Run workflow**

## Monitoring

- View workflow runs: **Actions** tab in GitHub
- View logs: Click on any workflow run
- Set up notifications: **Settings** → **Notifications** → **Actions**

## Troubleshooting

### Workflow Not Running
- Check if workflow file is in `.github/workflows/`
- Verify branch name matches workflow trigger
- Check if paths filter matches your changes

### Build Failures
- Check workflow logs in Actions tab
- Verify dependencies are up to date
- Check for syntax errors in code

### Deployment Failures
- Verify Vercel secrets are set correctly
- Check Vercel project settings
- Review deployment logs

## Best Practices

1. **Keep workflows fast**: Use caching for dependencies
2. **Test before merge**: Use PR workflows to catch issues early
3. **Monitor regularly**: Check workflow status regularly
4. **Update dependencies**: Use dependency update workflow
5. **Review PR comments**: Automated comments help reviewers

## Customization

### Modify Workflow Triggers

Edit workflow files to change when they run:

```yaml
on:
  push:
    branches: [ main, develop ]  # Add/remove branches
    paths:
      - 'frontend/**'  # Modify paths
```

### Add More Tests

Add test steps to workflows:

```yaml
- name: Run tests
  run: npm test
```

### Add Notifications

Add Slack/Discord notifications:

```yaml
- name: Notify Slack
  uses: 8398a7/action-slack@v3
  with:
    status: ${{ job.status }}
    webhook_url: ${{ secrets.SLACK_WEBHOOK }}
```

## Resources

- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Vercel GitHub Integration](https://vercel.com/docs/concepts/git)
- [Workflow Syntax](https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions)

