import './polyfills';

import { platformBrowser } from '@angular/platform-browser';
import { AppModuleNgFactory } from './app.module.ngfactory';

import {AppModule} from "./app.module";
import {enableProdMode} from "@angular/core";

enableProdMode();

platformBrowser().bootstrapModuleFactory(AppModuleNgFactory);