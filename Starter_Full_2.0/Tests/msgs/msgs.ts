[Item1]
Description=msgs.get_msg (invalid msg_id)
TestScript=ut.msgs.get_msg_invalid_id.tst
Enabled=True
Performance=
Var1Name=result
Var1Enabled=True
Var1Type=String
Var1InputValue=
Var1OutputValue=Unable to retrieve message text for message code: -99
Var2Name=i_msg_cd
Var2Enabled=True
Var2Type=String
Var2InputValue=-99
Var2OutputValue=
[Item2]
Description=msgs.get_msg (invalid msg_cd)
TestScript=ut.msgs.get_msg_invalid_cd.tst
Enabled=True
Performance=
Var1Name=result
Var1Enabled=True
Var1Type=String
Var1InputValue=
Var1OutputValue=Unable to retrieve message text for message code: Bogus Message Code
Var2Name=i_msg_cd
Var2Enabled=True
Var2Type=String
Var2InputValue=Bogus Message Code
Var2OutputValue=
[Item3]
Description=msgs.get_msg (by msg_cd)
TestScript=ut.msgs.get_msg_by_cd.tst
Enabled=True
Performance=
Var1Name=result
Var1Enabled=True
Var1Type=String
Var1InputValue=
Var1OutputValue=An assertion/assumption failed validation.
Var2Name=i_msg_cd
Var2Enabled=True
Var2Type=String
Var2InputValue=Assertion Failure
Var2OutputValue=
[Item4]
Description=msgs.get_msg (by msg_id)
TestScript=ut.msgs.get_msg_by_id.tst
Enabled=True
Performance=
Var1Name=result
Var1Enabled=True
Var1Type=String
Var1InputValue=
Var1OutputValue=None.
Var2Name=i_msg_id
Var2Enabled=True
Var2Type=Float
Var2InputValue=9
Var2OutputValue=
[Item5]
Description=msgs.get_msg_id (valid msg_cd)
TestScript=ut.msgs.get_msg_id.tst
Enabled=True
Performance=
Var1Name=result
Var1Enabled=True
Var1Type=Float
Var1InputValue=
Var1OutputValue=10
Var2Name=i_msg_cd
Var2Enabled=True
Var2Type=String
Var2InputValue=Assertion Failure
Var2OutputValue=
[Item6]
Description=msgs.get_msg_id (invalid msg_cd)
TestScript=ut.msgs.get_msg_id_notfound.tst
Enabled=True
Performance=
Var1Name=result
Var1Enabled=True
Var1Type=Float
Var1InputValue=
Var1OutputValue=9
Var2Name=i_msg_cd
Var2Enabled=True
Var2Type=String
Var2InputValue=Bogus Message Code
Var2OutputValue=
[Item7]
Description=msgs.get_msg_cd (invalid msg_id)
TestScript=ut.msgs.get_msg_cd_invalid_id.tst
Enabled=True
Performance=
Var1Name=result
Var1Enabled=True
Var1Type=String
Var1InputValue=
Var1OutputValue=Missing Msg
Var2Name=i_msg_id
Var2Enabled=True
Var2Type=Float
Var2InputValue=-99
Var2OutputValue=
[Item8]
Description=msgs.get_msg_cd (by msg_id)
TestScript=ut.msgs.get_msg_cd_by_id.tst
Enabled=True
Performance=
Var1Name=result
Var1Enabled=True
Var1Type=String
Var1InputValue=
Var1OutputValue=Ad-Hoc Msg
Var2Name=i_msg_id
Var2Enabled=True
Var2Type=Float
Var2InputValue=9
Var2OutputValue=
[Item9]
Description=msgs.fill_msg3
TestScript=ut.msgs.fill_msg3.tst
Enabled=True
Performance=
Var1Name=result
Var1Enabled=True
Var1Type=String
Var1InputValue=
Var1OutputValue=Lock on Bogus Lock already held by Bogus Lock. Try again in 5 minutes.
Var2Name=i_msg_cd
Var2Enabled=True
Var2Type=String
Var2InputValue=Logical Lock Held
Var2OutputValue=
Var3Name=i_field1
Var3Enabled=True
Var3Type=String
Var3InputValue=Bogus Lock
Var3OutputValue=
Var4Name=i_field2
Var4Enabled=True
Var4Type=String
Var4InputValue=Fake App
Var4OutputValue=
Var5Name=i_field3
Var5Enabled=True
Var5Type=String
Var5InputValue=5
Var5OutputValue=
Var6Name=i_field4
Var6Enabled=True
Var6Type=String
Var6InputValue=
Var6OutputValue=
Var7Name=i_field5
Var7Enabled=True
Var7Type=String
Var7InputValue=
Var7OutputValue=
