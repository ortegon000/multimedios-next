import ContentLayout from "../content-layout";
import Component8 from "../../components/layouts/component8";
import React from "react";

export default function Tv55(): React.JSX.Element {
return (
    <ContentLayout section="tv 55" background="3">
        <Component8 videos={[
            "/videos/intro.webm"
        ]} title="Subtitle" />
    </ContentLayout>
    );
}