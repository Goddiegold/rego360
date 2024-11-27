
export const scrollContainerToView = (containerId: string) => {
    const container = document.getElementById(containerId);
    if (container) {
        container.scrollIntoView({ behavior: 'smooth' });
    }
}


export const support = {
    phone: "+234 705 215 2823", 
    address: "6881, Freaky Way, Ikeja, Lagos state Nigeria",
    mail: "support@rego360.com"
}