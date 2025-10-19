# Donut Jump - Electron Desktop App

## Running the Electron App

### Development Mode (with hot reload)
```bash
npm run electron:dev
```
This will start both Vite dev server and Electron app with live reloading.

### Run Electron with built files
```bash
npm run build
npm run electron
```

### Build Desktop Application

#### Build for Windows
```bash
npm run dist
```
This creates an installer in the `release` folder.

#### Just package (no installer)
```bash
npm run pack
```

## Available Scripts

- `npm run dev` - Start Vite dev server only
- `npm run build` - Build the web app
- `npm run electron` - Run Electron with built files
- `npm run electron:dev` - Run Electron in development mode
- `npm run dist` - Build distributable app (installer)
- `npm run pack` - Package app without installer

## Output

Built applications will be in the `release` folder.
