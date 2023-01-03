import {delay, MonoTypeOperatorFunction} from 'rxjs';

export function randomDelay<T>(min: number, max: number): MonoTypeOperatorFunction<T> {
  return delay(Math.floor(Math.random() * (max - min)) + min)
}
