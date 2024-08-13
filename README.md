# Repro for issue 7553

## Versions

firebase-tools: v13.5.1<br>
node: v20.12.2<br>
platform: macOS Sonoma 14.5

## Steps to reproduce

1. Turn off machine WiFi
2. Run `firebase emulators:start --project demo-project --only firestore,functions --import ./emulator-data`
3. Open a new terminal, then run `curl http://127.0.0.1:5001/demo-project/us-central1/helloWorld`
   - Outputs:

```json
{
  "docs": [
    { "name": "widget_01", "id": "1" },
    { "name": "widget_00", "id": "0" },
    { "name": "widget_03", "id": "3" },
    { "name": "widget_02", "id": "2" },
    { "name": "widget_04", "id": "4" }
  ]
}
```
