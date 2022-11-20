// import axios from 'axios'
import { Observable } from 'rxjs'

class DummyServiceImp {
  public delay (ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms))
  }

  async dummyAPICall (): Promise<any> {
    await this.delay(1000)
    return Observable.create((observer: any) => {
      observer.next([])
      observer.complete()
    })
  }
}

export const DummyService = new DummyServiceImp()
