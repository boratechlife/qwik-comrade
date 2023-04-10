import {
  type Signal,
  component$,
  createContextId,
  Slot,
  useContextProvider,
  useSignal,
} from "@builder.io/qwik";
import Footer from "~/components/common/Footer";
import Header from "~/components/common/Header";
import SlideNav from "~/components/common/SlideNav";

export const SlideNavContext = createContextId<Signal<boolean>>("slideNav");

export default component$(() => {
  useContextProvider(SlideNavContext, useSignal(false));
  return (
    <div class="app">
      <SlideNav />
      <Header />
      <Slot />
      <Footer />
    </div>
  );
});
