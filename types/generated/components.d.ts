import type { Schema, Attribute } from '@strapi/strapi';

export interface ComponentsTopVideo extends Schema.Component {
  collectionName: 'components_components_top_videos';
  info: {
    displayName: 'TopVideo';
    description: '';
  };
  attributes: {
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 40;
      }>;
    SubTitle: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 30;
      }>;
  };
}

export interface LayoutHeader extends Schema.Component {
  collectionName: 'components_layout_headers';
  info: {
    displayName: 'Header';
    icon: 'grid';
    description: '';
  };
  attributes: {
    AdamitLogo: Attribute.Component<'layout.logo'> & Attribute.Required;
    secondaryLogo: Attribute.Component<'layout.logo'>;
    LanguageSwitcher: Attribute.Component<'layout.local-switcher'> &
      Attribute.Required;
  };
}

export interface LayoutLocalSwitcher extends Schema.Component {
  collectionName: 'components_layout_local_switchers';
  info: {
    displayName: 'LocalSwitcher';
  };
  attributes: {
    flags: Attribute.Relation<
      'layout.local-switcher',
      'oneToMany',
      'api::flag.flag'
    >;
  };
}

export interface LayoutLogo extends Schema.Component {
  collectionName: 'components_layout_logos';
  info: {
    displayName: 'Logo';
    icon: 'picture';
    description: '';
  };
  attributes: {
    logoImg: Attribute.Media & Attribute.Required;
  };
}

export interface MetadataSeo extends Schema.Component {
  collectionName: 'components_metadata_seos';
  info: {
    displayName: 'Seo';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.String & Attribute.Required;
    shareImage: Attribute.Media;
  };
}

export interface NavigationLink extends Schema.Component {
  collectionName: 'components_navigation_links';
  info: {
    displayName: 'Link';
    icon: 'link';
    description: '';
  };
  attributes: {
    url: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'help-section'>;
    text: Attribute.String & Attribute.Required;
    isInternal: Attribute.Boolean & Attribute.DefaultTo<false>;
  };
}

export interface UtilsLocalVideo extends Schema.Component {
  collectionName: 'components_utils_local_videos';
  info: {
    displayName: 'LocalVideo';
    description: '';
  };
  attributes: {
    video: Attribute.Media & Attribute.Required;
    type: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'video/mp4'>;
    src: Attribute.String;
    videoSettings: Attribute.Component<'utils.video-object'> &
      Attribute.Required;
  };
}

export interface UtilsVideoObject extends Schema.Component {
  collectionName: 'components_utils_video_objects';
  info: {
    displayName: 'videoObject';
  };
  attributes: {
    autoplay: Attribute.Boolean & Attribute.DefaultTo<false>;
    responsive: Attribute.Boolean & Attribute.DefaultTo<true>;
    muted: Attribute.Boolean & Attribute.DefaultTo<true>;
    fill: Attribute.Boolean & Attribute.DefaultTo<false>;
    loop: Attribute.Boolean & Attribute.DefaultTo<false>;
    fluid: Attribute.Boolean & Attribute.DefaultTo<true>;
    controls: Attribute.Boolean & Attribute.DefaultTo<true>;
  };
}

export interface UtilsVideoSource extends Schema.Component {
  collectionName: 'components_utils_video_sources';
  info: {
    displayName: 'VideoSourceExternal';
    description: '';
  };
  attributes: {
    type: Attribute.Enumeration<['video/mp4', 'video/youtube']> &
      Attribute.DefaultTo<'video/mp4'>;
    src: Attribute.String & Attribute.Required;
    videoSettings: Attribute.Component<'utils.video-object'> &
      Attribute.Required;
  };
}

export interface ViewsAdditionalMaterial extends Schema.Component {
  collectionName: 'components_views_additional_materials';
  info: {
    displayName: 'AdditionalMaterial';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    materials: Attribute.Component<'views.materials', true> &
      Attribute.Required &
      Attribute.SetMinMax<{
        min: 1;
      }>;
  };
}

export interface ViewsContactDetails extends Schema.Component {
  collectionName: 'components_views_contact_details';
  info: {
    displayName: 'ContactSection';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    contacts: Attribute.Relation<
      'views.contact-details',
      'oneToMany',
      'api::contact.contact'
    >;
  };
}

export interface ViewsContactForm extends Schema.Component {
  collectionName: 'components_views_contact_forms';
  info: {
    displayName: 'Contact Form';
    description: '';
  };
  attributes: {
    name: Attribute.String & Attribute.Required & Attribute.DefaultTo<'name'>;
    email: Attribute.String & Attribute.Required & Attribute.DefaultTo<'email'>;
    contactArea: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'contact'>;
    submitButton: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'submit'>;
    sendErrorMessage: Attribute.String & Attribute.Required;
    sendSuccessMessage: Attribute.String & Attribute.Required;
    shareContactRequest: Attribute.Blocks & Attribute.Required;
    title: Attribute.String & Attribute.Required;
  };
}

export interface ViewsDonateChannelButton extends Schema.Component {
  collectionName: 'components_views_donate_channel_buttons';
  info: {
    displayName: 'DonateChannelButton';
  };
  attributes: {
    paymentType: Attribute.String & Attribute.Required;
    link: Attribute.String & Attribute.Required;
    buttonText: Attribute.String & Attribute.Required;
  };
}

export interface ViewsEmail extends Schema.Component {
  collectionName: 'components_views_emails';
  info: {
    displayName: 'email';
    description: '';
  };
  attributes: {
    emailAddress: Attribute.Email &
      Attribute.Required &
      Attribute.DefaultTo<'kehilaadamit@gmail.com'>;
    type: Attribute.String & Attribute.Required & Attribute.DefaultTo<'email'>;
    fieldName: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'email'>;
  };
}

export interface ViewsGallery extends Schema.Component {
  collectionName: 'components_views_galleries';
  info: {
    displayName: 'Gallery';
    description: '';
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    pics: Attribute.Media & Attribute.Required;
  };
}

export interface ViewsHelpItem extends Schema.Component {
  collectionName: 'components_views_help_items';
  info: {
    displayName: 'HelpItem';
    description: '';
  };
  attributes: {
    header: Attribute.String & Attribute.Required;
    items: Attribute.JSON & Attribute.Required;
  };
}

export interface ViewsMaterials extends Schema.Component {
  collectionName: 'components_views_materials';
  info: {
    displayName: 'Materials';
    description: '';
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    type: Attribute.Enumeration<['download', 'link']> & Attribute.Required;
    files: Attribute.Media;
    link: Attribute.String;
  };
}

export interface ViewsPhone extends Schema.Component {
  collectionName: 'components_views_phones';
  info: {
    displayName: 'Phone';
    description: '';
  };
  attributes: {
    type: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'cellular'>;
    phoneNumber: Attribute.String & Attribute.Required;
    fieldName: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'phone'>;
  };
}

export interface ViewsTextBox extends Schema.Component {
  collectionName: 'components_views_text_boxes';
  info: {
    displayName: 'TextBox';
    description: '';
  };
  attributes: {
    text: Attribute.Text & Attribute.Required;
    textNumber: Attribute.Integer & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'components.top-video': ComponentsTopVideo;
      'layout.header': LayoutHeader;
      'layout.local-switcher': LayoutLocalSwitcher;
      'layout.logo': LayoutLogo;
      'metadata.seo': MetadataSeo;
      'navigation.link': NavigationLink;
      'utils.local-video': UtilsLocalVideo;
      'utils.video-object': UtilsVideoObject;
      'utils.video-source': UtilsVideoSource;
      'views.additional-material': ViewsAdditionalMaterial;
      'views.contact-details': ViewsContactDetails;
      'views.contact-form': ViewsContactForm;
      'views.donate-channel-button': ViewsDonateChannelButton;
      'views.email': ViewsEmail;
      'views.gallery': ViewsGallery;
      'views.help-item': ViewsHelpItem;
      'views.materials': ViewsMaterials;
      'views.phone': ViewsPhone;
      'views.text-box': ViewsTextBox;
    }
  }
}
