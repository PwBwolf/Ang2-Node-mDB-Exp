import { PlatformRef } from '@angular/core';
export { DomEventsPlugin } from './dom/events/dom_events';
export { EventManager, EVENT_MANAGER_PLUGINS } from './dom/events/event_manager';
export { ELEMENT_PROBE_PROVIDERS } from './dom/debug/ng_probe';
export { BROWSER_APP_COMMON_PROVIDERS, BROWSER_SANITIZATION_PROVIDERS, BROWSER_PROVIDERS, By, Title, enableDebugTools, disableDebugTools, HAMMER_GESTURE_CONFIG, HammerGestureConfig } from './browser_common';
export * from '../private_export';
export { DOCUMENT } from './dom/dom_tokens';
export { DomSanitizationService, SecurityContext } from './security/dom_sanitization_service';
export { bootstrapStatic, browserStaticPlatform, BROWSER_APP_STATIC_PROVIDERS, BrowserPlatformLocation } from './platform_browser_static';
export declare function browserPlatform(): PlatformRef;
