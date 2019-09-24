import React from 'react';
import SidebarWidgetItem from './SidebarWidgetItem';

const SidebarWidget = props => {
    return (
        <>
            <SidebarWidgetItem classIcon=""
                widgetContent="Meet the Developer Who Took Stack Overflow from Screen to Stage"
            />
            <SidebarWidgetItem classIcon=""
                widgetContent="Unicorn Meta Zoo #8: What does leadership look like in our communities?"
            />
            <SidebarWidgetItem classIcon=""
                widgetContent="Stack Exchange and Stack Overflow are moving to CC BY-SA 4.0"
            />
            <SidebarWidgetItem classIcon="fav-liarsflow"
                widgetContent="Join our dedicated Meta Stack Overflow chat room!"
            />
            <SidebarWidgetItem classIcon="fav-liarsflow"
                widgetContent="2020 Developer Survey: any topic suggestions?"
            />
        </>
    )
}

export default SidebarWidget;