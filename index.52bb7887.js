const e=document.querySelectorAll("[data-menu-open]"),o=document.querySelectorAll("[data-menu-close]"),t=document.querySelector("[data-menu]"),n=document.querySelectorAll("[data-modal-open]"),d=(document.getElementsByTagName("form"),document.querySelectorAll("[data-modal-close]")),c=document.querySelector("[data-modal]");if(e.length)for(const o of e)o.addEventListener("click",a);if(o.length)for(const e of o)e.addEventListener("click",i);if(n.length)for(const e of n)e.addEventListener("click",s);if(d.length)for(const e of d)e.addEventListener("click",l);function s(){document.body.classList.add("modal-open"),c.classList.remove("is-hidden")}function l(){document.body.classList.remove("modal-open"),c.classList.add("is-hidden")}function a(){document.body.classList.add("menu-open"),t.classList.add("is-open")}function i(){document.body.classList.remove("menu-open"),t.classList.remove("is-open")}
//# sourceMappingURL=index.52bb7887.js.map
