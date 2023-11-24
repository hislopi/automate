import {
  BannerSlice,
  ContentBlockSlice,
  FAQsSlice,
  FeatureSlice,
  FullHeroSlice,
  ImageBlockSlice,
  IntroSlice,
  ShowroomSlice,
  SpacerSlice,
  TwoColContentSlice,
  VideoBlockSlice,
  GallerySlice,
  CardsSlice,
} from "@components/slices"
import FeatureSliderSlice from "@components/slices/FeatureSliderSlice"
import { SliceZone } from "@prismicio/react"
import * as React from "react"
import ContactFormSlice from "@components/slices/contact-form-slice/ContactFormSlice"
import GridCardsSlice from "@components/slices/GridCardsSlice"
import ContactFormGlobal from "@components/slices/contact-form-global/ContactFormSlice"

const components = {
  full_hero: FullHeroSlice,
  spacer: SpacerSlice,
  introduction_content: IntroSlice,
  showroom: ShowroomSlice,
  feature: FeatureSlice,
  feature_slider: FeatureSliderSlice,
  banner: BannerSlice,
  content_block: ContentBlockSlice,
  two_column_content: TwoColContentSlice,
  image_block: ImageBlockSlice,
  faqs: FAQsSlice,
  video_block: VideoBlockSlice,
  gallery: GallerySlice,
  contact_form: ContactFormSlice,
  cards: CardsSlice,
  grid_cards: GridCardsSlice,
}

export const PageTemplate = props => {
  const document = props.data.page

  return (
    <>
      <SliceZone slices={document.data.body} components={components} />
      <ContactFormGlobal slices={document.data.body} />
    </>
  )
}
