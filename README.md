# Big Signal

[Angular Challenges](https://github.com/tomalaforge/angular-challenges) Big Signal Solution

## Information

In this challenge, you can imagine a big application where you store your user state inside a service and you use this service to use your user anywhere in your application.
The issue is when you update one property of your user, the entire application is updating.

I added the `CDFlashingDirective` to vizualise when one component is rerendering.

## Statement

With Signal, you can now be more fine-grained in what the UI is rerendering. The goal of this challenge is to understand why everything is rerendering and you refactor the application to be more performante.

## Thoughts

- Used CDN for Tailwind CSS styling.   
- Possible explanation: `When you read a signal within an OnPush component's template, Angular tracks the signal as a dependency of that component. When the value of that signal changes, Angular automatically marks the component to ensure it gets updated the next time change detection runs.`
- `In case an input receives a mutable object as value and you modify the object but preserve the reference, Angular will not invoke change detection. That’s the expected behavior because the previous and the current value of the input point to the same reference.`
- `Signal Components, envisioned for future Angular versions, will provide a more fine-grained behavior: Only changed parts of components will be checked. These parts will be embedded views defined by structural directives like ngFor or ngIf.`
- Can't maintain type safety in templates with signal objects.

## Useful Resources

- [Angular University](https://blog.angular-university.io/angular-signals/#:~:text=If%20the%20value%20that%20we,systematically%20emitting%20the%20same%20value) - Angular Signals Complete Guide
- [YouTube](https://www.youtube.com/watch?v=vy03zR73Rio&t=13s) - How to use Signals with Angular Forms?
- [YouTube](https://www.youtube.com/watch?v=-yPnPZV3Bp8) - Don't use Signals with Angular Reactive Forms!
- [Stack Overflow](https://stackoverflow.com/questions/78303010/tosignal-on-observables-inside-signal) - tosignal on observables inside signal
- [Hackernoon](https://hackernoon.com/a-guide-to-angular-signals-with-practical-use-cases-part-1) - a guide to angular signals with practical use cases part 1
- [Stack Overflow](https://stackoverflow.com/questions/78513169/using-and-updating-objects-with-angular-singals) - using and updating objects with angular signals
- [Stack Overflow](https://stackoverflow.com/questions/77918786/angular-reactive-form-with-signals-based-service) - angular reactive form with signals based service
- [Dev.to](https://dev.to/leolanese/angular-17-reactive-forms-signals-standalone-components-nib) - angular 17 reactive forms signals standalone components nib
- [Angular architects](https://www.angulararchitects.io/en/blog/angular-signals-your-architecture-5-options/) - angular signals your architecture 5 options