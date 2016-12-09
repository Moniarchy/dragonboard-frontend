const qrCode = {
  "category": "Dashboard Tools",
  "group": "QR Code",
  "type": "QR Code",
  "title": "QR Code",
  "description": "Create and display a QR Code for any URL",
  "image": "http://placehold.it/140x100?text=QRCODE",
  "sections": [{
    "type": "Setup",
    "fields": [
      {
        "name": "Title",
        "type": "text",
        "defaultValue": "QR Code"
      },
      {
        "name": "Size",
        "type": "dropdown",
        "defaultValue": "1x1",
        "options": [
          { "label": "1x1", "value": "1x1" },
          { "label": "2x2", "value": "2x2" }
        ]
      },
      {
        "name": "URL",
        "type": "text",
        "help": "Enter the URL you'd like to make and display a QR Code for",
        "defaultValue": ""
      }
    ]
  }]
}

export default qrCode
