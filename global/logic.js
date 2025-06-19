const selectedUnits = ["m", "ft"];
const unitMeta = {
    m: {
    icon: "/global/assets/icons/ruler(1).png", label: "Metro (m)"
    },
    ft: {
        icon: "/global/assets/icons/ruler(2).png", label: "Pié (ft)"
    }
};

function createElement(unit, iconPath, displayName) {
    const card = document.createElement("div");
    card.classList.add("unit-card");
    card.innerHTML = `
<div class="unit-header">
