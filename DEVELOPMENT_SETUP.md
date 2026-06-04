# Development Setup Guide

This project uses standard development tools to ensure code quality and consistency.

## Tools

### Prettier

Code formatter for consistent styling across the project.

**Configuration:** `.prettierrc`

**Commands:**

```bash
# Format all files
npm run format

# Check formatting without making changes
npm run format:check
```

### ESLint

Code linter for catching errors and enforcing best practices.

**Configuration:** `eslint.config.mjs`

**Commands:**

```bash
# Lint all files
npm run lint

# Lint and auto-fix issues
npm run lint:fix
```

### Husky

Git hooks for running checks before commits and pushes.

**Hooks:**

- `pre-commit` - Runs lint-staged to format and lint staged files
- `pre-push` - Runs full lint and format checks before pushing
- `commit-msg` - (Optional) Validates commit messages

**Setup:**
Husky is automatically initialized when you run `npm install` (via the `prepare` script).

### Lint-Staged

Runs linters and formatters only on staged files (faster pre-commit checks).

**Configuration:** `package.json` → `lint-staged`

**What it does:**

- Formats and lints JavaScript/TypeScript files
- Formats JSON, Markdown, CSS, and other files

## Workflow

### Before Committing

1. **Stage your changes:**

   ```bash
   git add .
   ```

2. **Husky will automatically:**
   - Run ESLint on staged `.js`, `.jsx`, `.ts`, `.tsx` files
   - Run Prettier on all staged files
   - Fix auto-fixable issues
   - Format code

3. **If checks pass**, your commit proceeds
4. **If checks fail**, fix the issues and try again

### Before Pushing

Husky will automatically:

- Run full lint check
- Run format check
- Prevent push if issues are found

### Manual Formatting

If you want to format all files manually:

```bash
npm run format
```

### Manual Linting

If you want to lint all files manually:

```bash
npm run lint
```

Or auto-fix issues:

```bash
npm run lint:fix
```

## Configuration Files

- `.prettierrc` - Prettier configuration
- `.prettierignore` - Files to ignore when formatting
- `eslint.config.mjs` - ESLint configuration
- `.lintstagedrc.json` - Lint-staged configuration (also in package.json)
- `.husky/` - Git hooks directory

## IDE Integration

### VS Code

Install these extensions for best experience:

- **Prettier** - Code formatter
- **ESLint** - Linting support

Add to your `.vscode/settings.json`:

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit"
  }
}
```

### Other IDEs

Most modern IDEs support Prettier and ESLint. Check your IDE's documentation for setup instructions.

## Troubleshooting

### Pre-commit hook not running

Make sure Husky is set up:

```bash
npm run prepare
```

### Formatting issues

Run Prettier manually:

```bash
npm run format
```

### Linting errors

Try auto-fixing:

```bash
npm run lint:fix
```

### Bypass hooks (not recommended)

If you need to bypass hooks temporarily:

```bash
git commit --no-verify
git push --no-verify
```

**Warning:** Only use `--no-verify` in emergencies. It skips important quality checks.

## Best Practices

1. **Format before committing** - Let Prettier format your code
2. **Fix linting errors** - Don't commit code with linting errors
3. **Run checks locally** - Don't rely only on pre-commit hooks
4. **Keep configs updated** - Update Prettier/ESLint configs as needed
5. **Don't bypass hooks** - They're there to maintain code quality

## CI/CD Integration

These tools can also be integrated into CI/CD pipelines:

```yaml
# Example GitHub Actions
- name: Lint
  run: npm run lint

- name: Format Check
  run: npm run format:check
```
