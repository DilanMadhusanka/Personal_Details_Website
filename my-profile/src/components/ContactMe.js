import React from 'react';

const ContactUs = () => {
    return (
        <div className="ui container" style={{padding:"100px 0px 0px 0px"}}>
            <div className="ui stacked segment">
            <div class="ui list huge">
                <div class="item">
                    <i class="phone icon"></i>
                    <div class="content">
                        071 3287 289
                    </div>
                </div>
                <div class="item">
                    <i class="mail icon"></i>
                    <div class="content">
                        dilan.madhusanka289@gmail.com
                    </div>
                </div>
                <div class="item">
                    <i class="at icon"></i>
                    <div class="content">
                        No 17, Main Street, Opanayaka
                    </div>
                </div>
                <div class="item">
                    <i class="marker icon"></i>
                    <div class="content">
                        <a href="https://goo.gl/maps/Q6BLXnAKZETBW8qf6">My Location</a>
                        {/* <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d638.1802295619985!2d80.62081808463283!3d6.608769078437658!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2slk!4v1584249329346!5m2!1sen!2slk" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe> */}
                    </div>
                </div>
                {/* <div class="item">
                    <i class="linkify icon"></i>
                    <div class="content">
                        <a href="http://dilan.madhusanka289@gmail.com">semantic-ui.com</a>
                    </div>
                </div> */}
            </div>
        </div>
        </div>
    );
}

export default ContactUs;