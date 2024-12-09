# -*- coding: utf-8 -*-
"""
Created on Thu Nov  8 17:15:12 2018

@author: jt13426
"""
import http.server

server_address = ("", 8000)
handler_class = http.server.CGIHTTPRequestHandler  # ハンドラを設定
simple_server = http.server.HTTPServer(server_address, handler_class)
simple_server.serve_forever()
