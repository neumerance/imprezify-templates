## Welcome to Imprezify Creative Template Kit
Before anything else, I would like to thank you for giving interest on contributing creative template for imprezify.com .

Let us work together in one common goal to provide quality Free creative resume templates for everyone.

### Who can contribute?

- Anyone who has fundamental knowledge in frontend development using VueJS.
- Anyone who can develop HTML/CSS webpage design or a UI/UX developer.

### For frontend developer

Assumptions:

- You have atleast basic knowledge with VueJS
- You have basic knowledge with UI frameworks ([Material Design](https://material.io "Material Design") / [Veutify v1.5](https://v15.vuetifyjs.com/en/getting-started/quick-start "Veutify v1.5"))
- You have latest version of node in your machine

#### Preparing dev environment
`npm install -g @vue/cli`

`npm install -g @vue/cli-service-global`

`git clone git@github.com:neumerance/imprezify-templates.git`

`cd imprezify-templates`

`npm install`
#### Creating your template directory

From root directory
`mkdir src/components/templates/NameOfYourTemplate`

Note: We need to follow the standards of naming a template directory.
It should be in this format -> `NameOfYourTemplate`

Create index.vue in your template directory.
`cd src/components/templates/NameOfYourTemplate`

`touch index.vue`

#### Creating your first template

Before anything else, please create a branch for your template.
`git checkout template-name-of-your-template`

In your template directory, edit index.vue
```
<template>
	<h1>Hello Template</h1>
</template>
<script>
	export default {
		props: {
			basicInformation: Object,
			contactInformation: Object,
			workExperiences: Array,
			educations: Array,
			skills: Array,
		}
	}
</script>
<style scoped>
/ * css here */
</style>
```

Note: As you can see, we have defined the props for this component.
These sets of props is extremely important to make this template work in imprezify.com
Please make these props consistent to all of our template entry point component.

##### Below is the data structure you can pass to your template props

###### Basic Information

**Pointers need to remember when integration this data to your template design.**
Optional - meaning, display the element that contains the data only if present.
using directive `v-if` is usefull for this.

Most of these fields are self-explanatory.

**title** - is the desired title or position of the user.
**overview** - is the profile summary/overview of the user.

```
{
	firstName: '',
	middleName: '',
	lastName: '',
	title: '',
	overview: '',
	dateOfBirth: '',
	nationality: '',
	status: '',
	address: '',
	city: '',
	postalCode: '',
	country: ''
}
```
