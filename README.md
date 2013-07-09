Vimkeys - Firefox Extension
===========================
*(originally developed/maintained by __hut__, but it seems like it's been abandoned for 2 years)*

This small extension gives you the most useful
keybindings from the text-editor vim.

I want to keep this as small as possible, so there is no
settings window. If you want to add/change keys, please
edit the source.

Installation
------------
Just clone this repo into the extensions-folder of your firefox profile-folder and restart firefox
```shell
$ cd ~/Library/Application Support/Firefox/Profiles/fr4vxxec.default/extensions
$ git clone git@github.com:engeld/vimkeys.git
```

Supported keybindings
---------------------
```
Key | Action
----+-------------------------
 k  | scroll up by 1 line
 j  | scroll down by 1 line
 K  | scroll up by 1 page
 J  | scroll down by 1 page
 g  | scroll to top
 G  | scroll to bottom
----+-------------------------
 H  | back in history
 L  | forward in history
 r  | reload
 R  | reload, ignoring cache
 s  | stop loading
----+-------------------------
 h  | previous tab
 l  | next tab
 d  | close tab
 u  | undo closing tab
 t  | new tab
----+-------------------------
 :  | focus address bar
```

