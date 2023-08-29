import ContentLayout from "../content-layout";
import Component8 from "../../components/layouts/component8";
import React from "react";
const videos = [
{
    section: 52, video : ["/videos/intro.webm"]
},
{
    section: 53, video : [
    "/videos/intro.webm", 
    "/videos/intro.webm"
    ]
},
{
    section: 54, video : ["/videos/intro.webm"]
},
{
    section: 55, video : ["/videos/intro.webm"]
},
{
    section: 56, video : ["/videos/intro.webm"]
},
{
    section: 57, video : ["/videos/intro.webm"]
},
{
    section: 58, video : ["/videos/intro.webm"]
},
]

export default function Tv51(): React.JSX.Element {
return (
    <ContentLayout section="tv 51" background="3">
        <Component8 videos={[
            "/videos/intro.webm", 
            "/videos/intro.webm"
        ]} title="Subtitle" />
    </ContentLayout>
    );
}