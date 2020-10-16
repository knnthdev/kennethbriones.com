class Deslizador:
    def __init__(self, document):
        self.document = document
                 
    dv = document.getElementsByTagName("div")
    tgp = document.getElementsByTagName("p")
    title = document.getElementsByTagName("title")
    ptext = tgp.innerHTML
    pos = 0
    imgs = ["source/src1.jpg","source/src2.jpg","source/src3.jpg","source/src4.jpg","source/src5.jpg"]
    num = 0
    
    def imgtion():
        box = document.getElementById("imgbox")
        pos = pos + 1
        box.style.left = pos + "px"
    if pos % 2 != 0:
        box.src = imgs[num]
        num = num + 1
    if num >= 4:
        num=0

