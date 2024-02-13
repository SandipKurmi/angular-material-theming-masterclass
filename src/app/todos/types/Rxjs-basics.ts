// rxjs basic
// what is rxjs?
// rxjs is a library for composing asynchronous and event-based programs by using observable sequences.
// rxjs is a javascript library for reactive programming using observables that makes it easier to compose asynchronous or callback-based code.
// what is reactive programming?
// Reactive programming is a declarative programming paradigm which is oriented around data flows and the propagation of change.
// where reactive programming is particularly good?
// Reactive Programming is particularly good for event handling, asynchronous requests, and handling multiple data sources.
// what is observable?
// An Observable is a unique Object similar to a Promise that can help manage async code.

import { of } from 'rxjs';
import { map } from 'rxjs/operators';
const obs$ = of(1, 2, 3, 4, 5);
obs$.subscribe((data) => console.log(data));

// rxjs operators
// what is an operator?
// Operators are functions that build on the observables foundation to enable sophisticated manipulation of collections.
// it is pure function which creates a new observable. based on previous one.
// bacause it is pure function it does not modify the original observable.
// what is a pure function?
// A pure function is a function where the return value is only determined by its input values, without observable side effects.
// what are the types of operators?
// there are two types of operators:
// 1. Pipeable Operators
// 2. Creation Operators

//Creation Operators
// of is a creation operator that creates an observable from a list of values.

// Pipeable Operators
// there are also pipeable operators those are comming from rxjs/operators
// pipeable operators are used to perform operations on the observable data and then return a new observable.
// pipeable operators are used with the pipe() method of an observable.
// pipeable operators are allow you to modify the data which is inside the observable.

// what is pipe() method?
// pipe() method is used to combine multiple operators into a single function.

const userInformation$ = of({ name: 'John Doe', age: 25 });
userInformation$
  .pipe(
    map((user) => {
      user.age = user.age + 1;
      return user;
    })
  )
  .subscribe((data) => console.log(data));

// subject in rxjs
// what is subject?
// A Subject is a special type of Observable that allows values to be multicasted to many Observers.
// how to create a subject?

import { Subject } from 'rxjs';
const subject = new Subject<number>();
subject.subscribe((data) => console.log(data));
subject.next(1);
subject.next(2);
subject.next(3);

// BehaviorSubject in rxjs

// what is BehaviorSubject?
// A variant of Subject that requires an initial value and emits its current value to new subscribers.
// what is the difference between Subject and BehaviorSubject?
// BehaviorSubject requires an initial value and emits its current value to new subscribers.

import { BehaviorSubject } from 'rxjs';
const behaviorSubject = new BehaviorSubject<number>(0);
behaviorSubject.subscribe((data) => console.log(data));
behaviorSubject.next(1);
behaviorSubject.next(2);
behaviorSubject.next(3);

//observable vs promise

// what is the difference between observable and promise?
// 1. Observable is a more powerful way of handling async code than promises.
// 2. Observable can handle multiple values over time.
// 3. Observable can be cancelled.
// 4. Observable can be retried.
// 5. Observable can be composed.
// 6. Observable can be combined.
// 7. Observable can be filtered.
// 8. Observable can be transformed.
// 9. Observable can be multicasted.
// 10. Observable can be debounced.
// 11. Observable can be throttled.
// 12. Observable can be delayed.
// 13. Observable can be merged.
// 14. Observable can be zipped.
// 15. Observable can be switched.
// 16. Observable can be forked.
// 17. Observable can be shared.
// 18. Observable can be buffered.
// 19. Observable can be windowed.
// 20. Observable can be sampled.
// 21. Observable can be audited.
// 22. Observable can be distinct.
// 23. Observable can be distinctUntilChanged.
// 24. Observable can be takeUntil.
// 25. Observable can be takeWhile.
// 26. Observable can be skipUntil.
// 27. Observable can be skipWhile.
// 28. Observable can be repeat.
// 29. Observable can be repeatWhen.
// 30. Observable can be retry.
// 31. Observable can be retryWhen.
// 32. Observable can be catchError.

//observable
// 1. can emit multiple values over time.
// 2. can be cancelled.
// 3. observable are lazy. you have to subscribe to them to get the values.
// it might be async or sync.
// observable are cancellable you can cancel it any time by calling unsubscribe method.
// observable are lazy it will not start to execute until you subscribe to it
// reach support of diffrent operators
// predictable and easy to use
// predicatable error handling in subscibe callback or appropriate operator.

// promise
// 1. can emit only a single value.
// 2. cannot be cancelled.
// 3. promise are eager. they start to execute as soon as they are created.
// it is always async.
// promise are not cancellable once it is created it will be executed.
// promise are eager it will start to execute as soon as it is created.
// in promis there are no operators. only then and catch methods are there.
// error handling is not predicatable in promise.

// difference between hot and cold observable

// what is hot observable?
// A hot observable is an observable that is already producing values before a subscription is created.
// a hot observable : produces values even if there are no subscribers.(producer created outside the stream)
// hot observable - is multicast.
// multicast means that the observable is shared among multiple subscribers.
// hot observable is like live youtube video. it is already producing values before a subscription is created.

// what is cold observable?
// A cold observable is an observable that only begins producing values when a subscription is created.
// a cold observable : produces values only if there are subscribers.(producer created inside the stream)
// cold observable - is unicast.
// unicast means that the observable is not shared among multiple subscribers.
// cold observable is like a recorded video. it only starts producing values when a subscription is created.

//memory leak in rxjs
// what is memory leak?
// A memory leak is a type of resource leak that occurs when a computer program incorrectly manages memory allocations in such a way that memory which is no longer needed is not released.
// it when your program manages inCorrectly the memory and user more memory than it needs.
// how to prevent memory leak in rxjs?
// 1. unsubscribe from the observable when you are done with it.
// 2. use takeUntil operator to unsubscribe from the observable.
// 3. use takeWhile operator to unsubscribe from the observable.
// 4. use take operator to unsubscribe from the observable.
// 5. use finalize operator to unsubscribe from the observable.
// 6. use share operator to share the observable among multiple subscribers.

// flattening operators in rxjs
// what is flattening operators & when to use them?
// flattening operators are used to flatten the nested observables.
// flattening operators are used when you have nested observables.

// name some flattening operators?
// 1. mergeMap
// 2. switchMap
// 3. concatMap
// 4. exhaustMap

//name the difference between mergeMap, switchMap, concatMap, exhaustMap?

// mergeMap
// 1. mergeMap is used to merge the nested observables.
// 2. mergeMap does not cancel the previous observables.
// 3. mergeMap is used when you want to merge the nested observables.

// switchMap
// 1. switchMap is used to switch to the latest observable.
// 2. switchMap cancels the previous observables.
// 3. switchMap is used when you want to switch to the latest observable.

// concatMap
// 1. concatMap is used to concat the nested observables.
// 2. concatMap does not cancel the previous observables.
// 3. concatMap is used when you want to concat the nested observables.

// exhaustMap
// 1. exhaustMap is used to ignore the nested observables.
// 2. exhaustMap ignores the previous observables.
// 3. exhaustMap is used when you want to ignore the previous observables.
