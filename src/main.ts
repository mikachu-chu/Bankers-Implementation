import { mount } from 'svelte';
import './app.css';
import App from './App.svelte';
import 'remixicon/fonts/remixicon.css';

const app = mount(App, {
  target: document.getElementById('app')!,
});

export default app;
