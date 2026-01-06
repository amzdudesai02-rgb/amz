// PM2 Ecosystem Configuration for Hostinger VPS
// Place this file in your backend directory on the server

module.exports = {
  apps: [{
    name: 'amzdudes-backend',
    script: 'venv/bin/uvicorn',
    args: 'api.tools:app --host 0.0.0.0 --port 8000',
    cwd: '/var/www/amzdudes-backend', // Update this path
    interpreter: 'none',
    exec_mode: 'fork',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    error_file: './logs/err.log',
    out_file: './logs/out.log',
    log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
    merge_logs: true,
    env: {
      NODE_ENV: 'production',
      PYTHONUNBUFFERED: '1'
    }
  }]
}

