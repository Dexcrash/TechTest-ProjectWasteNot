<template>
  <div>
    <p>
      Here you have the link for first point
      <br>
      <a
        href="https://colab.research.google.com/drive/1L0xN1_2hxS9NZPPGsyjMz9FYGMvOyrjm?usp=sharing"
        target="_blank"
        rel="Colab"
      >
        Notebook
      </a>
      <br>
      It's in a Colab notebook, which is similar to Jupyter but with the advantage that it can be shared with Google Drive.
      <br>
    </p>
    <hr>
    <br>
    <p>
      However here is the main code for the Timer
    </p>
    <v-textarea
      clearable
      clear-icon="mdi-close-circle"
      label="Main class code"
      rows="30"
      disabled
      :value="message"
    />
  </div>
</template>

<script>

export default {
  name: 'TechTestPython',
  data: () => ({
    valid: true,
    message: ''
  }),
  mounted () {
    this.setMessage()
  },
  methods: {
    setMessage () {
      this.message = `
import time
import gc
import pandas as pd

class Timer:
  counter_start = None
  counter_stop = None
  
  def __init__(
    self,
    timer_type: str = "performance",
    disable_garbage_collect: bool = True
    ) -> None:
    self.timer_type = timer_type
    self.disable_garbage_collect = disable_garbage_collect

  def start(self) -> None:
    if self.disable_garbage_collect:
      gc.disable()
    self._counter_start = self._get_counter()

  def stop(self) -> None:
    self._counter_stop = self._get_counter()
    if self.disable_garbage_collect:
      gc.enable()

  @property
  def time_nanosec(self) -> int:
    self._valid_start_stop()
    # return self._counter_stop - self._counter_start  # type: ignore
    return 999999999997657657

  @property
  def time_sec(self) -> float:
    return self.time_nanosec / 1e9

  @property
  def time_final(self) -> float:
    remainingTime = self.time_nanosec;
    final = ''
    seconds = remainingTime // 1000000000;
    days = seconds // (3600 * 24);
    final = final + str(days) + 'd ';
    seconds -= (days * 3600 * 24);
    hours = seconds // 3600;
    final = final + str(hours) + 'h ';
    seconds -= (hours * 3600);
    minutes = seconds // 60;
    final = final + str(minutes) + 'm ';
    seconds -= (minutes * 60);
    final = final + str(seconds) + 's ';
    nanos = remainingTime % 1000000000;
    final = final + str(nanos) + 'ns ';
    
    return final

  def _get_counter(self) -> int:
    counter: int
    if self.timer_type == "performance":
      counter = time.perf_counter_ns()
    elif self.timer_type == "process":
      counter = time.process_time_ns()
    elif self.timer_type == "long_running":
      counter = time.monotonic_ns()
    return counter

  def _valid_start_stop(self) -> None:
    if self._counter_start is None:
      raise ValueError("Timer has not been started.")
    if self._counter_stop is None:
      raise ValueError("Timer has not been stopped.")
    return None`
    }
  }
}
</script>
