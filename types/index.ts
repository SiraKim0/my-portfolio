export interface NotionPostDataType {
  object: string;
  results: NotionPostType[];
  has_more: boolean;
  type: string;
}

export interface NotionPostType {
  object: string;
  id: string;
  created_time: string;
  last_edited_time: string;
  created_by: {
    object: string;
    id: string;
  };
  last_edited_by: {
    object: string;
    id: string;
  };
  cover: {
    type: string;
    external: {
      url: string;
    };
    file: {
      url: string;
    };
  };
  icon: null;
  parent: {
    type: string;
    database_id: string;
  };
  archived: boolean;
  properties: NotionPropertyType;
  url: string;
}

export interface NotionPropertyType {
  description: RichText;
  status: Status;
  date: Date;
  tags: tags;
  slug: RichText;
  title: Title;
  github: GithubUrl;
}

export interface RichText {
  id: string;
  type: "rich_text";
  rich_text: RichTextContent[];
}

export interface RichTextContent {
  annotations: Annotations;
  plain_text: string;
  text: {
    content: string;
    link: null;
  };
  type: "text";
  href: null;
}

export type Annotations = {
  bold: boolean;
  code: boolean;
  italic: boolean;
  color: string;
  strikethrough: boolean;
  underline: boolean;
};

export interface Status {
  id: string;
  type: "status";
  status: {
    id: string;
    name: "Plan" | "Write" | "Upload";
    color: "gray" | "blue" | "green";
  };
}

export interface Date {
  id: string;
  type: "date";
  date: {
    start: string;
    end: string;
  };
}

export interface tags {
  id: string;
  multi_select: Select[];
  type: "multi_select";
}

export interface Select {
  id: string;
  name: string;
  color: string;
}

export interface Title {
  id: string;
  title: TitleText[];
  type: "title";
}

export interface TitleText {
  annotations: Annotations;
  href: null;
  plain_text: string;
  type: "text";
}
export interface GithubUrl {
  id: string;
  type: string;
  url: string;
}

export type statusFilter = {
  filter?: {
    property: string;
    status: {
      equals: string;
    };
  };
  sorts?: [
    {
      property: string;
      direction: string;
    }
  ];
};
