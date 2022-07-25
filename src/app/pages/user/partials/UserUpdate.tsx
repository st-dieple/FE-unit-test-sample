import React, { useState } from 'react';
import TabContent from '../../../shared/components/partials/TabContent';
import TabNav from './../../../shared/components/partials/TabNav';
import UserEditProfile from './UserEditProfile';
import UserEditPassword from './UserEditPassword';

const UserUpdate = () => {
  const [activeTab, setActiveTab] = useState<string>('edit-profile');

  return (
    <div className="page-update">
      <div className="container">
        <div className="row">
          <div className="col-3">
            <ul className="tab-user-list">
              <TabNav
                content={
                  <div className="tab-user">
                    <div className="tab-user-icon">
                      <i className="fa-solid fa-pen"></i>
                    </div>
                    <span className="tab-user-title">Edit profile</span>
                  </div>
                }
                id="edit-profile"
                activeTab={activeTab}
                setActiveTab={setActiveTab}
              />
              <TabNav
                content={
                  <div className="tab-user">
                    <div className="tab-user-icon">
                      <i className="fa-solid fa-lock"></i>
                    </div>
                    <span className="tab-user-title">Change Password</span>
                  </div>
                }
                id="change-password"
                activeTab={activeTab}
                setActiveTab={setActiveTab}
              />
            </ul>
          </div>
          <div className="col-9">
            <TabContent id="edit-profile" activeTab={activeTab}>
              <UserEditProfile/>
            </TabContent>
            <TabContent id="change-password" activeTab={activeTab}>
              <UserEditPassword/>
            </TabContent>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserUpdate;
