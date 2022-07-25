delay 1

tell application "System Events"
	set frontmost of process "UserNotificationCenter" to true
	
	tell process "UserNotificationCenter"
		
		if exists button "Allow" of window 1 then
			repeat while exists button "Allow" of window 1
				
				if exists button "Allow" of window 1 then
					click button "Allow" of window 1
				end if
				
			end repeat
			
		end if
		
	end tell
end tell