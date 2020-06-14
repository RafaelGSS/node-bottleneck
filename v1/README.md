# V1

[ref](https://github.com/vdeturckheim/debuggable-app)

## Running

```
npm start &
autocannon -c 10 -d 10 http://localhost:3000/;
```

## Setup debugger

**CDT**:

```sh
npm run start:cdt
```

go at [inspect](chrome://inspect/#devices) and select your nodejs app. Go to `profile` tab and record your app.

**PERF**:

```sh
npm run start:perf
```

Profilling
```sh
PID=$!
sudo perf record -F 99 -p $PID -g -- sleep 100
sudo chown root /tmp/perf-$PID.map
sudo perf script > nodestacks
```

Generate FlameGraph
```sh
FlameGraph $ ./stackcollapse-perf.pl < ../node-bottleneck/v1/debug-result/nodestacks | ./flamegraph.pl --colors js > ../node-flamegraph.svg
```
// Explain --prof-basic-perf-only-functions

**0x**:


**ClinicJS**:

**--Prof**
