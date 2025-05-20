# Tilwind CSS

- Tailwind css is the most popular CSS framework
- Tailwind css is most used and prefared as it is compact with a lot of varities of design and compatibility with other tech 
- It is easy to use and allows user to build morden and responsive designs qucikly. 
- insted of writting custom css, user can apply utility classes directly in html , jsx , tsx, asp file etc.

### How to install tailwind css in your HTML File ( v4.0 )

- Go to tailwind official site 
<a href=" https://tailwindcss.com/">Tailwind CSS </a>

- Go to Docs
- Go to instalation and click on Tailwind CLI
- Create your project folder and open it on vs code
- Then open Terminal on vs code of your porject
- Run this Command
    ````
    npm install tailwindcss @tailwindcss/cli
    ````
- After the command, node_module, package.lock.json and package.json file will be created
- Create a CSS file as <strong> style.css </strong> and paste it into it 
    ````
    @import "tailwindcss";
    `````

- Create a Html file 
- Make a proper folder structure 
<img src="https://media2.dev.to/dynamic/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fbosdpni04f4rhoscokrl.PNG">

- open the terminal and run this command

    ``````
        npx @tailwindcss/cli -i ./assets/styles/style.css -o ./assets/styles/output.css --watch
    ``````

- Now you can see your terminal working properly 
- Download an extension on vs Code: <strong> Tailwind inteligence CSS </strong>
- go to html and link the output.css in your html 
- Now you can use TailwindCss in your html css file
- incase your terminal is terminated then again run the input and output command to run the tailwind css

  
 ---

# lsp support for taiwind

If you're using Tailwind CSS and want Tailwind LSP (Language Server Protocol) to work properly in Neovim,
you need to have a tailwind.config.js or tailwind.config.ts file, even a minimal one like here .

Here’s why it's required and how it helps the Tailwind LSP:
✅ Why is tailwind.config.js required for Tailwind LSP?

    Tells the LSP where to look for Tailwind classes.

        Without the content field, Tailwind LSP won’t know where to scan for class names.

        Example: content: ["./*.html"] tells it to look for class names in your HTML files.

    Enables autocompletion of Tailwind classes.

        LSP uses this config to suggest class names while you type.

    Allows LSP to pick up custom configurations like:

        Extended colors, spacing, breakpoints, etc.

        Plugins or variants you might add.

🧠 Minimal Setup for Neovim LSP to Work:

If you're just starting out, this config is enough:

```js
// tailwind.config.js
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

And make sure:

//what ever you all know about it .
Tailwind is installed (e.g., via npm install -D tailwindcss)

    You’ve also installed tailwindcss-language-server globally or locally (e.g., npm i -g @tailwindcss/language-server)

    Your LSP config in Neovim points to it properly (e.g., using lspconfig.tailwindcss.setup({}))



