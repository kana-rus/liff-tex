# Usage
(This app is supposed to be used with a smartphone in LINE openchat)

1. Send URL https://liff-tex-egwqnfzr0-kana-rus.vercel.app/?openExternalBrowser=1 as a message to a openchat (it may be better to fix it at the header by "announcing" the mmessage).
2.  The URL above contains parameter "openExternalBrowser=1", this forces LINE to open this URL by external browser (Googe Chrome, for example) instaed of LINE's own browser. So when anyone touch this, he or she automatically moves to liff-tex page opend by another browser.
3.  Write KaTeX expressions in textarea (which has "download" button on it's bottom). This app will render KaTeX in rendering area above as you wrote.
4. Whenever you're in the page, you can download .png image of the rendering area by pushing "download".
5. If you get a KaTeX image you want, go back to LINE (you only have to once put back your smartphone's history).
6. Downloaded images will be in proper size if you made them with smartphone. If not, manufact it in LINE app. As you've done, send it to the openchat.

# Why external browser
In LINE's own browser or LIFF app , we can't download any file to local machines because of implementaion of LINE app itself. Of course web apps can't resolve this. So if we want download something from web, we have to open it externally.

# Why named "liff”-tex
I hoped to implemant this as a liff app for the first time. That's all.