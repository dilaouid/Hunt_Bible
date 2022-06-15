const appendContent = (el, docById) => {
    const option = document.createElement('option');
    option.text = el.label;
    option.value = el.value;
    option.id = el.id;
    docById.appendChild(option);
};

const largeSelect = document.getElementById('large-weapon-select');
weapons.large_weapons.map( (el, i) => {
    appendContent(el, largeSelect);
});

const mediumSelect = document.getElementById('medium-weapon-select');
weapons.medium_weapons.map( (el, i) => {
    appendContent(el, mediumSelect);
});

const smallSelect = document.getElementById('small-weapon-select');
weapons.small_weapons.map( (el, i) => {
    appendContent(el, smallSelect);
});