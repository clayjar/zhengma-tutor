# Zhengma typing tutor

Status: an early prototype; work in progress

The data is read through ./src/utils/words.js file. As of now, it's based on two primitive static strings, and only contains around 715 lexicons, which consists of codes from "a" to "zz".

## TODOs

1. Create a better data structure; possibly a two dimensional array with a hanja and corresponding keycode. ./src/utils/zhengma.dict.yaml is included for reference.
2. Instead of displaying the key codes and having it as a reference to type, have the user enter keycode in a text field below the hanja.

## Nice-to-haves

1. Highlight the root components as the user is typing.

## Note

On a standard ReactJS starter template, npm run watch has been added.
