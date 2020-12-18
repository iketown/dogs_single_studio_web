import S from "@sanity/desk-tool/structure-builder";
import isDemo from "../deploy_settings/isDemo";

const demoSettings = () =>
  S.list()
    .title("Content")
    .items([...S.documentTypeListItems()]);

const singleUserSettings = () =>
  S.list()
    .title("Content")
    .items([
      // DOCUMENT LIST START
      // About me:
      S.listItem()
        .title("About Me")
        .child(S.document().schemaType("breeder").documentId("main_breeder")),
      // Dogs subcategory:
      S.listItem()
        .title("Dogs")
        .child(
          S.list()
            .title("Dogs")
            .items(
              // only docs with "dogs" in categories.
              S.documentTypeListItems().filter((listItem) => {
                const schemaType = listItem.getSchemaType();
                console.log("schemaType ->", schemaType);
                return ["dog", "dog_external", "whelp"].includes(
                  schemaType.name
                );
              })
            )
        ),
      ...S.documentTypeListItems().filter((listItem) => {
        return !["breeder"].includes(listItem.getId());
      }),
    ]);

export default isDemo ? demoSettings : singleUserSettings;
