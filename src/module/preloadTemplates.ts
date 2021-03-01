export async function preloadTemplates(): Promise<Handlebars.TemplateDelegate[]> {
  const templatePaths: string[] = [
    // Add paths to "modules/panToToken/templates"
  ];

  return loadTemplates(templatePaths);
}
