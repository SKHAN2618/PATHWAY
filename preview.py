import http.server, socketserver, webbrowser, threading
PORT=8000
Handler=http.server.SimpleHTTPRequestHandler
with socketserver.TCPServer(("",PORT),Handler) as httpd:
    print(f"Pathway preview running at http://localhost:{PORT}")
    threading.Timer(0.7, lambda: webbrowser.open(f"http://localhost:{PORT}/index.html")).start()
    httpd.serve_forever()
