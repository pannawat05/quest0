// src/stores/filter.js
import { writable } from 'svelte/store';

export const searchTerm = writable('');
export const filterStatus = writable('All');