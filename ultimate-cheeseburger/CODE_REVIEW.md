# Code review

## Files:

### app.component.html
  - We should remove commented code that is not used anymore, just to keep things clean,

### ingredients and burger components
  - We should remove unused constructor and ngOnInit implementations, we don't use them so there is no need to implement them even though they were added by the cli :D.

### Create component
  - Thumbs up for using dynamic components, in your example we create the components and attach them to the burger in the app.component, that means we can't reuse the burger component without having to reimplement the logic in the app.component.ts. We should move the burger rendering logic inside the burger component, so that we can reuse the burger.
  - If we check the createComponent, createMeatComponent, etc. methods we can see a reoccuring pattern, we could use only one function that renders the components and pass it the component that we want to render.

### Overall
  - Great job! I like what you have done :D it needs a bit of refactoring for reusability, but looks great, GG. Try to focus more on keeping the code DRY (https://www.codementor.io/joshuaaroke/dry-code-vs-wet-code-89xjwv11w), and focusing on reusability (https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0)
