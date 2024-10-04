// Type animation
const text_list = [" a Web Developer", " a Data Scientist", " an AI engineer"]

let type_effect_total_characters = 0

for (i = 0; i < text_list.length; i++){
    for (j = 0; j <= text_list[i].length; j++){
        type_effect_total_characters += 1
    }
}


let type_effect_total_keyframes = type_effect_total_characters * 2

let type_effect_keyframe_increament = 100 / (type_effect_total_keyframes - 5)


let type_effect_keyframes = `@keyframes typeeffect{`
keyframe_value = 0
for (let i = 0; i < text_list.length; i++){
    current_type_level = ""
    
    for (let j = 0; j < text_list[i].length; j++){

        current_type_level += text_list[i].charAt(j)
        type_effect_keyframes += `
        ${keyframe_value}%{
        content: "${current_type_level}"
        
        }
        `
        keyframe_value += type_effect_keyframe_increament
    
    }
    for (let j = 0; j < text_list[i].length; j++){

        current_type_level = text_list[i].substring(0, text_list[i].length - j - 1)
        type_effect_keyframes += `
        ${keyframe_value}%{
        content: "${current_type_level}"
        
        }
        `
        keyframe_value += type_effect_keyframe_increament
    }
}
type_effect_keyframes += `}`

const style_css_stylesheet = document.styleSheets[0];
style_css_stylesheet.insertRule(type_effect_keyframes, style_css_stylesheet.cssRules.length)
console.log(style_css_stylesheet)
